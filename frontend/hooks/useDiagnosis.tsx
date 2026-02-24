import{useState} from 'react';
import{useRouter}from 'next/navigation';
import { postAnswers } from "@/lib/postAnswers";


export const useDiagnosis = (questionCount: number) => {
    const router = useRouter();
    const [answer, setAnswers] = useState<number[]>(Array(questionCount).fill(0))
const [isSubmitting, setIsSubmitting] = useState(false);
//行列の作成
const handleSelect = (index:number, value: number) => {
    const newAnswers = [...answer];
    newAnswers[index] = value;
    setAnswers(newAnswers);
};
//解答不足の確認
const validate = () =>{
    return !answer.some((ans => ans ===0));
};
//行列の成形
const buildPayload = () => {
return {
    answers: answer.map((ans, idx) => ({
        number: idx + 1,
        answer: ans,
    })),
    };
};

const submit = async () => {
    if (!validate()) {
        alert("すべての質問に回答してください")
            return;
    }
    setIsSubmitting(true);


    try {
        const payload = buildPayload();
        const response = await postAnswers(payload);
        router.push(`/result/${response.type}`);
    }catch(error) {
        console.error(error);
        alert("送信エラー");
    } finally {
    setIsSubmitting(false);
    }
    };
    return{
        answer,
        handleSelect,
        submit,
        isSubmitting,
    };
    };
