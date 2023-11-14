import "./style.css";

export const Section = ({title, body, extraHeaderContent}) => (
    <section className="section">
        <header className="section__header">
            <h3 className="section__headerName">{title}</h3>
            {extraHeaderContent}
        </header>
        <div className="section__body">
            {body}
        </div>
       
    </section>);