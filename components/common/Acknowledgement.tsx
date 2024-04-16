import Image from 'next/image'
import cx from 'classnames'
import M4Logo from '@/assets/images/M4Logo.png'

interface Props {
	className?: string
}

const Acknowledgement: React.FC<Props> = ({ className }) => {
	return (
		<div className={cx('mx-auto flex w-fit items-center gap-[18px]', className)}>
			<p className='text-[22px] font-light text-primary'>Powered by</p>
			<div className='flex items-center gap-1.5'>
				<Image src={M4Logo} alt='M4Logo' width={50} height={50} />
				<p className='text-[22px] font-medium text-[#252525]'>Mint4Change</p>
			</div>
		</div>
	)
}

export default Acknowledgement
