import { Badge } from "@/components/ui/badge";

interface BadgeStatusProps {
  status: React.ReactNode;
}

export const BadgeStatus = ({ status }: BadgeStatusProps) => {
  return <Badge variant="secondary">{status}</Badge>;
};
