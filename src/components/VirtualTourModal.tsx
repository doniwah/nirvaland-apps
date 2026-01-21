import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyName?: string;
  embedUrl: string;
}

const VirtualTourModal = ({ isOpen, onClose, propertyName = "Properti", embedUrl }: VirtualTourModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] h-[80vh] p-0 overflow-hidden">
        <DialogHeader className="p-4 pb-2 bg-primary">
          <DialogTitle className="text-primary-foreground font-display">
            Virtual Tour 360° - {propertyName}
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 h-full min-h-[500px]">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "500px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Virtual Tour ${propertyName}`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VirtualTourModal;
