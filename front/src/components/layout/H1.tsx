type Props = {
    name: string;
    explanation: string;
    color1?: string;
    color2?: string;
};

export function H1({ name, explanation, color1="text", color2="text-white" }: Props) {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div>
                    <h1 className={`text-${color1} text-64 text-shadow-xl`}>
                        {name}
                    </h1>
                    <p className={`${color2} text-16 text-shadow-xl text-center`}>
                        {explanation}
                    </p>
                </div>
            </div>
        </div>
    );
}

