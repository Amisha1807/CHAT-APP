const Message = ({ message }) => {

	return (
		<div className='chat chat-end'>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={'https://wallpapers.com/images/hd/aesthetic-profile-picture-1rgefsojys253ard.jpg'} />
				</div>
			</div>
			{/* <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div> */}
            <div>Hi</div>
		</div>
	);
};
export default Message;