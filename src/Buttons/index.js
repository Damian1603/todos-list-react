import "./style.css"

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (

    <div className="section__headerButtons">
        {tasks.length > 0 && (
            <>
                <button
                    onClick={toggleHideDone}
                    className="section__headerButtons">
                    {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
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