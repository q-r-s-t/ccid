"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = GET;

var _googleapis = require("googleapis");

function GET(request) {
  var serviceAccountEmail, privateKey, spreadsheetId, auth, sheets, range, data;
  return regeneratorRuntime.async(function GET$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // 환경 변수 가져오기
          serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
          privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"); // 줄 바꿈 처리

          spreadsheetId = process.env.GOOGLE_SHEET_ID; // Google API 인증 설정

          _context.next = 6;
          return regeneratorRuntime.awrap(_googleapis.google.auth.getClient({
            credentials: {
              client_email: serviceAccountEmail,
              private_key: privateKey
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets"]
          }));

        case 6:
          auth = _context.sent;
          // Google Sheets API 클라이언트 생성
          sheets = _googleapis.google.sheets({
            version: "v4",
            auth: auth
          }); // 데이터 가져오기

          range = "Sheet1!A:D"; // 스프레드시트 범위 설정

          _context.next = 11;
          return regeneratorRuntime.awrap(sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: range
          }));

        case 11:
          data = _context.sent;
          return _context.abrupt("return", new Response(JSON.stringify(data.data), {
            status: 200,
            headers: {
              "Content-Type": "application/json"
            }
          }));

        case 15:
          _context.prev = 15;
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

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 15]]);
}