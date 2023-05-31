const AnswerSection = ({ storedValues }) => {

    return (
        <>
            <div>
                {storedValues.map((value, index) => {
                    return (
                        <div key={index}>
                            <p>{value.question}</p>
                            <p>{value.answer}</p>
                            
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default AnswerSection;