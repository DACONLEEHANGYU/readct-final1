import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CategoryWidget {
  path: string;
  icon: React.ReactNode;
  label: string;
  desc1: string;
  desc2: string;
  btnText: string;
}

interface Props {
  data: CategoryWidget;
}

function WidgetCategory({ data }: Props) {
  // react-router-dom의 페이지 라우팅을 도와준다.
  const navigate = useNavigate();

  return (
    <Card className="p-4 cursor-pointer">
      {data.icon}
      <h3 className="flex flex-col mt-[6px] gap-1">
        <span className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {data.label}
        </span>
        <small className="text-sm font-normal leading-none">{data.desc1}</small>
        <small className="text-sm font-normal leading-none">{data.desc2}</small>
      </h3>
      <Button
        variant="link"
        className="p-0 mt-2 -mb-2"
        onClick={() => navigate("/dashboard")}
      >
        <span className="text-sm text-muted-foreground">{data.btnText}</span>
        <ArrowRight className="w-4 h-4 ml-1"></ArrowRight>
      </Button>
    </Card>
  );
}

export default WidgetCategory;
