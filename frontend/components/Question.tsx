import { RatingButton } from "./RatingButton";

type Props = {
  number: number;
  content: string;
  selectedAnswer: number;
  onSelect: (value: number) => void;
};

export const Question = ({
  number,
  content,
  selectedAnswer,
  onSelect,
}: Props) => {
  return (
    <div className="mb-6">
      <p className="mb-2">
        {number}. {content}
      </p>

      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <RatingButton
            key={value}
            value={value}
            isSelected={selectedAnswer === value}
            onClick={() => onSelect(value)}
          />
        ))}
      </div>
    </div>
  );
};