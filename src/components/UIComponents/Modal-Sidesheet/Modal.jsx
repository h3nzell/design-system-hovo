import React, { useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Footer from "./Footer";
import Header from "./Header";
import Typography from "../../Basic/Typography";
import useOutsideClick from "../../../hooks/useOutsideClick";
import useLockBodyScroll from "../../../hooks/useBodyLock";

const Modal = ({
	open,
	title,
	children,
	onCancelHandler,
	hideFooterCancelButton,
	onPrimaryActionHandler,
	onSecondaryActionHandler,
	primaryButtonContent,
	secondaryButtonContent,
	footerChildren,
	headerChildren,
	disableDivider,
	titleClassName,
	cancelButtonContent,
	containerClassName,
	contentClassName,
	closable,
}) => {
	const ref = useRef(null);

	useOutsideClick(ref, onCancelHandler);

	useLockBodyScroll(open);

	if (!open) return null;

	return (
		<div className='absolute top-0 left-0 bottom-0 right-0 z-[10] w-full h-full bg-slate-500 bg-opacity-20 flex justify-center items-center'>
			<div
				ref={ref}
				className={classNames(
					"min-w-[700px] min-h-max max-h-[calc(100vh-360px)] bg-white rounded-[10px] flex flex-col",
					{
						[containerClassName]: containerClassName,
					}
				)}
			>
				{headerChildren ? (
					headerChildren
				) : (
					<Header
						titleClassName={titleClassName}
						onCancelHandler={onCancelHandler}
						disableDivider={disableDivider}
						title={title}
						closable={closable}
					/>
				)}
				<div
					className={classNames("px-6 py-5 overflow-auto flex-grow-[3]", {
						[contentClassName]: contentClassName,
					})}
				>
					{children ? (
						children
					) : (
						<div
							title='Add children to component to replace this template'
							className='w-full h-full flex justify-center items-center rounded-[10px] border-dashed border-2 bg-primary100 border-primary200'
						>
							<Typography
								className='text-primary500'
								weight='bold'
								size='lg'
								text='Replace Me'
							/>
						</div>
					)}
				</div>
				{footerChildren ? (
					footerChildren
				) : (
					<Footer
						disableDivider={disableDivider}
						cancelButtonContent={cancelButtonContent}
						onCancelHandler={onCancelHandler}
						hideFooterCancelButton={hideFooterCancelButton}
						onPrimaryActionHandler={onPrimaryActionHandler}
						onSecondaryActionHandler={onSecondaryActionHandler}
						primaryButtonContent={primaryButtonContent}
						secondaryButtonContent={secondaryButtonContent}
					/>
				)}
			</div>
		</div>
	);
};

Modal.defaultProps = {
	onCancelHandler: () => {},
	primaryButtonContent: "Primary Action",
	secondaryButtonContent: "Secondary Action",
	cancelButtonContent: "Cancel",
	title: "Modal Title",
	closable: true,
};

Modal.propTypes = {
	open: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	onPrimaryActionHandler: PropTypes.func,
	onCancelHandler: PropTypes.func,
	onSecondaryActionHandler: PropTypes.func,
	children: PropTypes.element,
	containerClassName: PropTypes.string,
	primaryButtonContent: PropTypes.string,
	secondaryButtonContent: PropTypes.string,
	titleClassName: PropTypes.string,
	footerChildren: PropTypes.element,
	headerChildren: PropTypes.element,
	cancelButtonContent: PropTypes.string,
	contentClassName: PropTypes.string,
	closable: PropTypes.bool,
	disableDivider: PropTypes.bool,
};

export default Modal;
