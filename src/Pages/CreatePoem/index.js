const PoemForm = () => {
  return (
    <div className="form-body">
      <form className="form" onSubmit={() => console.log("submit")}>
        <input type="text" placeholder="Title" />
        <textarea placeholder="Content"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default PoemForm;
