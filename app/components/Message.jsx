function Message({ successfulMessage }) {
  return (
    <>
      {successfulMessage ? (
        <div className="duration-200 showUp shadow-md flex flex-col bg-green-100 border border-green-500 text-green-500 p-4 rounded-md absolute right-10 top-0">
          <p>a new student added successfully</p>
        </div>
      ) : null}
    </>
  );
}

export default Message;
