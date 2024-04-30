import { Text } from "./text";

interface CardProps {
    title: string;
    description: string;
}

const Card:React.FC<CardProps> = ({ title, description }) => {
    return (
        <div className="flex flex-col rounded-2xl bg-white p-[16px] gap-[5px] h-fit">
            <Text content={title} weight='bold'/>
            <Text content={description} color="gray" size="base-12"/>
        </div>
    );
};

export {Card};