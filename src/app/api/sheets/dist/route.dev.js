"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;

var _googleapis = require("googleapis");

function GET(request) {
  var serviceAccountEmail, privateKey, spreadsheetId, auth, sheets, ranges, response, data;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // 환경 변수 가져오기
          serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
          privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");
          spreadsheetId = process.env.GOOGLE_SHEET_ID; // Google API 인증 설정

          _context.next = 6;
          return regeneratorRuntime.awrap(_googleapis.google.auth.getClient({
            credentials: {
              client_email: serviceAccountEmail,
              private_key: privateKey
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive"]
          }));

        case 6:
          auth = _context.sent;
          // Google Sheets API 클라이언트 생성
          sheets = _googleapis.google.sheets({
            version: "v4",
            auth: auth
          }); // 여러 시트에서 데이터 가져오기

          ranges = ["about!A1:D12", "works!A1:T6", "members!A1:E100"];
          _context.next = 11;
          return regeneratorRuntime.awrap(sheets.spreadsheets.values.batchGet({
            spreadsheetId: spreadsheetId,
            ranges: ranges
          }));

        case 11:
          response = _context.sent;
          // 데이터 정리
          data = {
            about: response.data.valueRanges[0].values,
            works: response.data.valueRanges[1].values,
            members: response.data.valueRanges[2].values
          }; // 데이터 출력
          // console.log("Fetched data from Google Sheets:", data);
          // console.log("Environment Variables:", process.env);
          // console.log(members)
          // JSON 응답 반환

          return _context.abrupt("return", new Response(JSON.stringify(data), {
            status: 200,
            headers: {
              "Content-Type": "application/json"
            }
          }));

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          console.error("Error fetching spreadsheet data:", _context.t0);
          return _context.abrupt("return", new Response(JSON.stringify({
            message: "Failed to fetch spreadsheet data",
            success: false
          }), {
            status: 500,
            headers: {
              "Content-Type": "application/json"
            }
          }));

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 16]]);
}