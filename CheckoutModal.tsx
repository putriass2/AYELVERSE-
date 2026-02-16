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
import { RadioGroup, RadioGroupItem } from "@/react-app/components/ui/radio-group";
import { Smartphone, Wallet, QrCode, MessageCircle } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  rankName: string;
  price: number;
}

export default function CheckoutModal({ isOpen, onClose, rankName, price }: CheckoutModalProps) {
  const [username, setUsername] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showUsernameAlert, setShowUsernameAlert] = useState(false);
  const [showPaymentAlert, setShowPaymentAlert] = useState(false);

  const handleCheckout = () => {
    if (!username.trim()) {
      setShowUsernameAlert(true);
      return;
    }
    if (!paymentMethod) {
      setShowPaymentAlert(true);
      return;
    }

    const paymentNames: { [key: string]: string } = {
      dana: "DANA",
      gopay: "GoPay",
      qris: "QRIS",
    };

    const message = `🎮 *PEMBELIAN RANK AYELVERSE*

📦 Rank: *${rankName}*
💰 Harga: *Rp ${price.toLocaleString("id-ID")}*
👤 Username Minecraft: *${username}*
💳 Metode Pembayaran: *${paymentNames[paymentMethod]}*

Nomor Pembayaran: *081378999763*

Mohon proses pembelian rank saya. Terima kasih!`;

    const whatsappUrl = `https://wa.me/6281378999763?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
    setUsername("");
    setPaymentMethod("");
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Checkout Rank {rankName}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Price Display */}
            <div className="bg-amber-600/10 border border-amber-600/30 rounded-lg p-4 text-center">
              <p className="text-slate-400 text-sm mb-1">Total Pembayaran</p>
              <p className="text-3xl font-bold text-amber-400">
                Rp {price.toLocaleString("id-ID")}
              </p>
            </div>

            {/* Username Input */}
            <div className="space-y-2">
              <Label htmlFor="username" className="text-white">
                Username Minecraft
              </Label>
              <Input
                id="username"
                placeholder="Contoh: Steve123"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
              />
              <p className="text-xs text-slate-400">
                Masukkan username Minecraft Anda yang terdaftar di server
              </p>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-3">
              <Label className="text-white">Metode Pembayaran</Label>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="space-y-2">
                  <div
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition ${
                      paymentMethod === "dana"
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
                    }`}
                    onClick={() => setPaymentMethod("dana")}
                  >
                    <RadioGroupItem value="dana" id="dana" className="border-white" />
                    <Label
                      htmlFor="dana"
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <Smartphone className="w-6 h-6 text-blue-500" />
                      <div>
                        <p className="font-semibold text-white">DANA</p>
                        <p className="text-xs text-slate-400">081378999763</p>
                      </div>
                    </Label>
                  </div>

                  <div
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition ${
                      paymentMethod === "gopay"
                        ? "border-green-500 bg-green-500/10"
                        : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
                    }`}
                    onClick={() => setPaymentMethod("gopay")}
                  >
                    <RadioGroupItem value="gopay" id="gopay" className="border-white" />
                    <Label
                      htmlFor="gopay"
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <Wallet className="w-6 h-6 text-green-500" />
                      <div>
                        <p className="font-semibold text-white">GoPay</p>
                        <p className="text-xs text-slate-400">081378999763</p>
                      </div>
                    </Label>
                  </div>

                  <div
                    className={`flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer transition ${
                      paymentMethod === "qris"
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-slate-700 bg-slate-800/50 hover:border-slate-600"
                    }`}
                    onClick={() => setPaymentMethod("qris")}
                  >
                    <RadioGroupItem value="qris" id="qris" className="border-white" />
                    <Label
                      htmlFor="qris"
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      <QrCode className="w-6 h-6 text-purple-500" />
                      <div>
                        <p className="font-semibold text-white">QRIS</p>
                        <p className="text-xs text-slate-400">Scan & Pay</p>
                      </div>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Checkout Button */}
            <Button
              onClick={handleCheckout}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
              size="lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Lanjut ke WhatsApp
            </Button>

            <p className="text-xs text-slate-400 text-center">
              Anda akan diarahkan ke WhatsApp untuk konfirmasi dan pembayaran
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Username Alert Dialog */}
      <AlertDialog open={showUsernameAlert} onOpenChange={setShowUsernameAlert}>
        <AlertDialogContent className="bg-slate-900 border-slate-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Username Diperlukan</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-400">
              Silakan isi username Minecraft Anda terlebih dahulu untuk melanjutkan pembelian.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="bg-amber-600 hover:bg-amber-700">
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Payment Method Alert Dialog */}
      <AlertDialog open={showPaymentAlert} onOpenChange={setShowPaymentAlert}>
        <AlertDialogContent className="bg-slate-900 border-slate-800">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white">Metode Pembayaran Diperlukan</AlertDialogTitle>
            <AlertDialogDescription className="text-slate-400">
              Silakan pilih metode pembayaran terlebih dahulu untuk melanjutkan.
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
