import './ItemListContainer.css';

export default function ItemListContainer({greeting}) {
    return (
        <section className="ItemListContainer-section">
            <h1 className="ItemListContainer-greeting">{greeting}</h1>
        </section>
    );
}