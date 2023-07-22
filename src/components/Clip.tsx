import { FC } from "react";
import { Paperclip, Camera, Video, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
interface AttachProps {}

const Clip: FC<AttachProps> = ({}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Paperclip />
      </PopoverTrigger>
      <PopoverContent className="flex bg-[#008000] p-2 rounded-full w-45 justify-between mb-2">
        <Button variant="ghost">
          <Camera className="text-white w-6 h-6" />
        </Button>
        <Button variant="ghost">
        <Video className="text-white w-6 h-6" />
        </Button>
        <Button variant="ghost">
        <FileDown className="text-white w-6 h-6" />
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default Clip;
