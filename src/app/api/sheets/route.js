import { google } from "googleapis";

export async function GET(request) {
  try {
    // 환경 변수 가져오기
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Google API 인증 설정
    const auth = await google.auth.getClient({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: privateKey,
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
      ],
    });

    // Google Sheets API 클라이언트 생성
    const sheets = google.sheets({ version: "v4", auth });

    // 여러 시트에서 데이터 가져오기
    const ranges = ["main!A1:A2", "about!A1:D12", "works!A1:T6", "members!A1:E100", "desc!A1:E10"];
    const response = await sheets.spreadsheets.values.batchGet({
      spreadsheetId,
      ranges,
    });

    // 데이터 정리
    const data = {
      main: response.data.valueRanges[0].values,
      about: response.data.valueRanges[1].values,
      works: response.data.valueRanges[2].values,
      members: response.data.valueRanges[3].values,
      desc: response.data.valueRanges[4].values,
    };

    // 데이터 출력
    // console.log("Fetched data from Google Sheets:", data);
    // console.log("Environment Variables:", process.env);
    // console.log(members)
    // JSON 응답 반환
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching spreadsheet data:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to fetch spreadsheet data",
        success: false,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
