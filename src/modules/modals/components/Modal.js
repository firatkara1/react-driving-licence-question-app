export default function Modal(props) {
  return (
    <div className="modal-background">
      <div className="modal-container">{props.children}</div>
    </div>
  );
}
