import styles from "./Card.module.scss"

export default function Card(props) {
  return (
    <div className="tile is-parent">
      <div className={`card ${styles.card}`}>
        <div className="card-content">
          <div className="content">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
