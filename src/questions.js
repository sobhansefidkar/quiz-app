import { Link } from "react-router-dom";
import { useGlobalContext } from "./context";

function Questions() {
    const { questions, index, check, increase , correctAnswers , again } = useGlobalContext()

    const { correct, incorrect, quiz } = questions[index == questions.length ? questions.length - 1 : index]
    let random = Math.floor(Math.random() * 4)
    let answers = [...incorrect]
    if (random == 3) {
        answers.push(correct)
    } else {
        answers.push(answers[random])
        answers[random] = correct
    }
    return (
        <div className="questions" style={{ direction: "rtl" }}>
            <h2>{quiz}</h2>
            <div className="box">
                {
                    index == questions.length &&
                    <div className="modal">
                        <div className="show-score">
                            <h3>امتیاز : {correctAnswers} / {index}</h3>
                            <Link to={"/"}>
                            <button onClick={again}>دوباره</button>
                            </Link>
                        </div>
                    </div>
                }
                {
                    answers.map((answer) => {
                        return (
                            <div key={answer.id}>
                                <span onClick={increase}>{answer.option}</span>
                                <span onClick={check}>{answer.correct}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Questions;