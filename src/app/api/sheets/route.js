import { google } from "googleapis";


export async function GET(request) {
  try {
    // 환경 변수 가져오기
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"); // 줄 바꿈 처리
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Google API 인증 설정
    const auth = await google.auth.getClient({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Google Sheets API 클라이언트 생성
    const sheets = google.sheets({ version: "v4", auth });

    // 데이터 가져오기
    const range = "Sheet1!A:D"; // 스프레드시트 범위 설정
    const data = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    // JSON 응답 반환
    return new Response(JSON.stringify(data.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching spreadsheet data:", error);
    return new Response(
      JSON.stringify({ message: "Failed to fetch spreadsheet data", success: false }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
