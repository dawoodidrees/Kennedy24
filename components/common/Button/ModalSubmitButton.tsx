import { Icon } from '@iconify/react'
import cx from 'classnames'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
}

const ModalSubmitButton: React.FC<Props> = ({ className, text, ...props }) => {
	return (
		<button
			{...props}
			className={cx(
				'flex h-12 w-full items-center justify-center rounded-[9px] bg-red gap-1',
				className
			)}
		>
			<p className='font-bold text-white'>{text}</p>
			<Icon icon='ph:caret-right-bold' className='text-white' />
		</button>
	)
}

export default ModalSubmitButton
