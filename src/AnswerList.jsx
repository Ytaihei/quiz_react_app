const AnswerList = ({ question, answers, handleJudgeQuiz }) => {
    return (
        <div>
            <h2>1問目</h2>
            <p className="quiz-question">{ question }</p>
            <ul>
                {answers.map((answer, key) => <li className="choice-button" onClick={handleJudgeQuiz} key={key}>{answer}</li>)}
            </ul>
        </div>
    )
}

export default AnswerList