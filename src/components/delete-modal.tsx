type DeleteModalProps = {
  handleDelete: () => void;
};

export const DeleteModal = ({ handleDelete }: DeleteModalProps) => {
  return (
    <dialog id='delete-modal' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>
          Are you sure to delete this habit?
        </h3>
        <p className='py-4'>This process cannot be undone.</p>
        <div className='modal-action'>
          <form className='flex gap-2' method='dialog'>
            <button className='btn'>Close</button>
            <button
              className='btn btn-outline btn-error'
              onClick={handleDelete}
            >
              Delete
            </button>
          </form>
        </div>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
};
