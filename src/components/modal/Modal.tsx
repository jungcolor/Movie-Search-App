const Modal = () => {
    return (
        <div className="modal open">
            <div className="flex flex-col modal-contents absolute top-5 left-5 right-5 bottom-5 z-30 bg-white opacity-90">
                <div className="flex justify-between p-6 bg-teal-500 border-b border-teal-700">
                    <h3>TITLE</h3>
                    <div className="modal-option">
                        <button type="button" id="modal-option-close"></button>
                    </div>
                </div>
                <div className="modal-body p-6">Modal Detail</div>
            </div>
        </div>
    );
};

export default Modal;
