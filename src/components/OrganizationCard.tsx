import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ManagementCardProps {
    role: string;
    description: string;
}

function OrganizationCard({ role, description }: ManagementCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div>
            <div onClick={() => setExpanded(!expanded)}>
                <span>{role}</span>
                {expanded ? <ChevronUp /> : <ChevronDown />}
            </div>
            {expanded && (
                <p>{description}</p>
            )}
        </div>
    )
}

export default OrganizationCard