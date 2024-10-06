// interface IconProps extends React.SVGProps<SVGSVGElement> {
//     iconOnly?: boolean;
//   }

export default function Bluetooth({ ...props }) {
	return (
		<svg {...props} className="di-svg" fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
			<path d="M14.88,16.29L13,18.17V14.41M13,5.83L14.88,7.71L13,9.58M17.71,7.71L12,2H11V9.58L6.41,5L5,6.41L10.59,12L5,17.58L6.41,19L11,14.41V22H12L17.71,16.29L13.41,12L17.71,7.71Z"></path>
		</svg>
	);
}
