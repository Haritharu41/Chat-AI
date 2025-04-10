import "./newPrompt.css";

function NewPrompt() {
  


  return (
    <div className="newPrompt">
      <form className="newForm">
        <label htmlFor="file">
          <img src="/attachment.png" alt="" />
        </label>
        <input type="file" id="file" multiple={false} hidden />
        <input type="text" placeholder="Ask me anything" />
        <button>
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default NewPrompt;
