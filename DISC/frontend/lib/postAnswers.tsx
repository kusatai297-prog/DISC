const API_URL = process.env.NEXT_PUBLIC_API_URL;

type AnswerPayload = {
    answers: {
        number : number;
        answer : number;
    }[]
};

type AnswerResponse = {
    status: string;
    type: "D" | "I" | "S" | "C";
};

export const postAnswers = async(
    payload: AnswerPayload):Promise<AnswerResponse> => {
        const res = await fetch(`${API_URL}/answers`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
    });

    const data = await res.json();
    


    if (!res.ok){
        throw new Error(JSON.stringify(data));
    }

    return data;
};
