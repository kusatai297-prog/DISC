const API_URL = process.env.NEXT_PUBLIC_API_URL;
type AnswerResponse = {
    status: string;
    type: "R" | "I" | "S" | "C";
};

export const postAnswers = async(
    payload: any):Promise<AnswerResponse> => {
        const res = await fetch(`${API_URL}/answers`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("API_URL:", API_URL);

    console.log("HTTPステータス:", res.status);
    console.log("Backendレスポンス:", data);


    if (!res.ok){
        throw new Error(JSON.stringify(data));
    }

    return data;
};