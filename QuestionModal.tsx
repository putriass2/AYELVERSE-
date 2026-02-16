import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/react-app/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/react-app/components/ui/alert-dialog";
import { Button } from "@/react-app/components/ui/button";
import { Input } from "@/react-app/components/ui/input";
import { Label } from "@/react-app/components/ui/label";
import { Textarea } from "@/react-app/components/ui/textarea";
import { MessageCircle } from "lucide-react";

interface QuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuestionModal({ isOpen, onClose }: QuestionModalProps) {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [showNameAlert, setShowNameAlert] = useState(false);
  const [showQuestionAlert, setShowQuestionAlert] = useState(false);

  const handleSubmit = () => {
    if (!name.trim()) {
      setShowNameAlert(true);
      return;
    }
    if (!question.trim()) {
      setShowQuestionAlert(true);
      return;
    }

    const message = `👋 Halo Admin AYELVERSE!

📝 Nama: *${name}*

❓ Pertanyaan:
${question}

Mohon bantuannya. Terima kasih!`;

    const whatsappUrl = `https://wa.me/6281378999763?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
    setName("");
    setQuestion("");
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Ajukan Pertanyaan
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            <p className="text-slate-400 text-sm text-center">
              Isi form di bawah ini dan pertanyaan Anda akan dikirim langsung ke admin via WhatsApp
            </p>

            {/* Name Input */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Nama Anda
              </Label>
              <Input
                id="name"
                placeholder="Contoh: Budi"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
            </div>

            {/* Question Input */}
            <div className="space-y-2">
              <Label htmlFor="question" className="text-white">
                Pertanyaan Anda
              </Label>
              <Textarea
                id="question"
                placeholder="Tulis pertanyaan Anda di sini..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 min-h-[120px] resize-none"
              />
              <p className="text-xs text-slate-400">
                Jelaskan pertanyaan Anda dengan detail agar kami bisa membantu lebih baik
              </p>
            </div>

            {/* Submit Button */}
            <Button
              onClick={handleSubmit}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Kirim ke WhatsApp
            </Button>

            <p className="text-xs text-slate-400 text-center">
              Anda akan diarahkan ke WhatsApp dengan pertanyaan yang sudah terisi otomatis
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Name Alert Dialog */}
      <AlertDialog open={showNameAlert} onOpenChange={setShowNameAlert}>
        <AlertDialogContent className="bg-slate-900 border-slate-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Nama Diperlukan</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-400">
              Silakan isi nama Anda terlebih dahulu.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="bg-amber-600 hover:bg-amber-700">
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Question Alert Dialog */}
      <AlertDialog open={showQuestionAlert} onOpenChange={setShowQuestionAlert}>
        <AlertDialogContent className="bg-slate-900 border-slate-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Pertanyaan Diperlukan</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-400">
              Silakan tulis pertanyaan Anda terlebih dahulu.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="bg-amber-600 hover:bg-amber-700">
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
