import { useRouter } from "next/router";
import "../../../styles/globals.scss";

const Templates = () => {
	const router = useRouter();
	let { templateId } = router.query;
	return (
		<div className="template">This is the new template from {templateId} </div>
	);
};

export default Templates;
