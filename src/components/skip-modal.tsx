type DeleteModalProps = {
  handleSkip: () => void;
};

export const SkipModal = ({ handleSkip }: DeleteModalProps) => {
  return (
    <dialog id='skip-modal' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>Are you sure to skip this habit?</h3>
        <p className='py-4'>This process cannot be undone.</p>
        <div className='modal-action'>
          <form className='flex gap-2' method='dialog'>
            <button className='btn btn-outline btn-error' onClick={handleSkip}>
              Skip
            </button>
            <button className='btn'>Close</button>
          </form>
        </div>
      </div>
      <form method='dialog' className='modal-backdrop'>
        <button>close</button>
      </form>
    </dialog>
  );
};
