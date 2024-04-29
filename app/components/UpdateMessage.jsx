import { TiTickOutline } from "react-icons/ti";
function UpdateMessage({ successfulMessage, id }) {
  return (
    <>
      {successfulMessage ? (
        <div className="duration-200 showUp z-50 shadow-md flex flex-col bg-green-100 border border-green-400 text-green-900 p-4 rounded-md fixed right-10 bottom-10">
          <p className="text-green-900 flex justify-center items-center gap-4">
            <span>
              <TiTickOutline size={20} color="green" />
            </span>
            The student {id} updated successfully
          </p>
        </div>
      ) : null}
    </>
  );
}

export default UpdateMessage;
