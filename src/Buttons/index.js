import "./style.css"

const Buttons = ({ tasks, hideCompleted }) => (

    <div className="section__headerButtons">
        {tasks.length > 0 && (
            <>
                <button className={`section__headerButtons`}>
                    {hideCompleted ? "Pokaż ukończone" : "Ukryj ukończone"}
                </button>
                <button
                    className="section__headerButtons"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);
export default Buttons;