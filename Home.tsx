import { useState } from "react";
import { rankPackages } from "@/data/servers";
import { Button } from "@/react-app/components/ui/button";
import { Card } from "@/react-app/components/ui/card";
import { Badge } from "@/react-app/components/ui/badge";
import { Check, Crown, Star, Sparkles, Gift, Server, Copy, Play, Users, Circle, MessageCircle, HelpCircle } from "lucide-react";
import CheckoutModal from "@/react-app/components/CheckoutModal";
import QuestionModal from "@/react-app/components/QuestionModal";
import { useServerStatus } from "@/react-app/hooks/useServerStatus";

export default function Home() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const [selectedRank, setSelectedRank] = useState<{ name: string; price: number } | null>(null);
  const serverIp = "play.ayelverse.my.id";
  const { status, loading } = useServerStatus(serverIp);

  const handleBuyRank = (rankName: string, price: number) => {
    setSelectedRank({ name: rankName, price });
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/30 backdrop-blur-xl sticky top-0 z-50 shadow-lg shadow-black/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30 transition-transform group-hover:scale-110">
              <Crown className="w-6 h-6 text-white drop-shadow-lg" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">AYELVERSE</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#join" className="text-slate-300 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">Cara Main</a>
            <a href="#ranks" className="text-slate-300 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">Rank</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-all hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">Kontak</a>
          </nav>
          <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 shadow-lg shadow-amber-600/30 transition-all hover:scale-105 hover:shadow-amber-600/50">Masuk</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Badge className="mb-6 bg-gradient-to-r from-amber-600/20 to-orange-600/20 text-amber-400 border-amber-600/40 backdrop-blur-sm shadow-lg shadow-amber-500/10 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <Crown className="w-3 h-3 mr-1" />
            Rank AYELVERSE Store
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-amber-200 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl animate-in fade-in slide-in-from-bottom-3 duration-900">
            Upgrade Rank VIP Kamu Sekarang!
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Dapatkan akses ke fitur eksklusif, command premium, dan bonus money in-game. Permanent rank selamanya!
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-in fade-in slide-in-from-bottom-5 duration-1100">
            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-xl shadow-amber-600/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-600/50" onClick={() => document.getElementById('ranks')?.scrollIntoView({ behavior: 'smooth' })}>
              <Crown className="w-4 h-4 mr-2" />
              Lihat Rank
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 shadow-lg transition-all hover:scale-105 hover:shadow-xl" onClick={() => setIsQuestionOpen(true)}>
              Ajukan Pertanyaan
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Crown, title: "Rank Permanen", desc: "Rank selamanya, tidak kadaluarsa", color: "from-amber-500/20 to-orange-500/20" },
            { icon: Star, title: "Fitur Eksklusif", desc: "Perintah premium & keuntungan", color: "from-blue-500/20 to-purple-500/20" },
            { icon: Gift, title: "Bonus Uang", desc: "Dapatkan uang dalam game", color: "from-green-500/20 to-emerald-500/20" },
            { icon: Sparkles, title: "Otomatis Aktif", desc: "Langsung aktif setelah beli", color: "from-pink-500/20 to-rose-500/20" },
          ].map((feature, i) => (
            <Card key={i} className={`bg-gradient-to-br ${feature.color} border-white/10 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 group animate-in fade-in slide-in-from-bottom-3`} style={{ animationDelay: `${i * 100}ms` }}>
              <feature.icon className="w-12 h-12 text-amber-400 mb-4 transition-transform group-hover:scale-110 group-hover:rotate-6 drop-shadow-lg" />
              <h3 className="text-white font-semibold mb-2 text-lg">{feature.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Server IP & How to Join */}
      <section id="join" className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <div className="inline-block p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm mb-6 shadow-xl shadow-amber-500/20">
              <Server className="w-16 h-16 text-amber-400 drop-shadow-lg" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">Cara Bergabung ke Server</h2>
            <p className="text-slate-300 text-lg">Ikuti langkah-langkah di bawah ini untuk bergabung ke AYELVERSE</p>
          </div>

          {/* Server IP */}
          <Card className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-white/10 backdrop-blur-2xl p-10 mb-10 shadow-2xl shadow-black/30 hover:shadow-amber-500/20 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4 duration-800">
            <div className="text-center">
              <p className="text-slate-300 mb-6 text-lg font-medium">IP Server Minecraft</p>
              
              {/* Java Edition */}
              <div className="mb-8">
                <Badge className="mb-4 bg-gradient-to-r from-emerald-600/30 to-green-600/30 text-emerald-300 border-emerald-500/40 backdrop-blur-sm shadow-lg shadow-emerald-500/20">
                  Java Edition
                </Badge>
                <div className="flex items-center justify-center gap-4 mb-2">
                  <code className="text-2xl md:text-4xl font-bold text-amber-400 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg border border-white/5">
                    {serverIp}
                  </code>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105 shadow-lg"
                    onClick={() => {
                      navigator.clipboard.writeText(serverIp);
                      alert("IP Server Java berhasil disalin!");
                    }}
                  >
                    <Copy className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-xs text-slate-400 mt-2">Port: 25565 (default)</p>
              </div>

              {/* Bedrock Edition */}
              <div className="mb-8">
                <Badge className="mb-4 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 text-blue-300 border-blue-500/40 backdrop-blur-sm shadow-lg shadow-blue-500/20">
                  Bedrock Edition
                </Badge>
                <div className="flex items-center justify-center gap-4 mb-2">
                  <code className="text-2xl md:text-4xl font-bold text-amber-400 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg border border-white/5">
                    {serverIp}
                  </code>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105 shadow-lg"
                    onClick={() => {
                      navigator.clipboard.writeText(serverIp);
                      alert("IP Server Bedrock berhasil disalin!");
                    }}
                  >
                    <Copy className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-xs text-slate-400 mt-2">Port: 19132 (default)</p>
              </div>

              {/* Server Status */}
              <div className="flex items-center justify-center gap-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg">
                  <Circle
                    className={`w-3 h-3 ${
                      loading
                        ? "fill-slate-500 text-slate-500"
                        : status.online
                        ? "fill-green-500 text-green-500 animate-pulse drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]"
                        : "fill-red-500 text-red-500"
                    }`}
                  />
                  <span className="text-white font-semibold">
                    {loading ? "Mengecek..." : status.online ? "Online" : "Offline"}
                  </span>
                </div>
                {status.online && status.players && (
                  <div className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg">
                    <Users className="w-5 h-5 text-amber-400 drop-shadow-lg" />
                    <span className="text-white font-semibold">
                      {status.players.online}/{status.players.max} Player
                    </span>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Join Instructions */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: 1,
                title: "Buka Minecraft",
                javaText: "Buka Minecraft Java Edition di PC/Laptop",
                bedrockText: "Buka Minecraft di Mobile/Windows 10/Console",
              },
              {
                step: 2,
                title: "Buka Menu Server",
                javaText: 'Klik "Multiplayer" → "Add Server"',
                bedrockText: 'Klik "Play" → "Servers" → "Add Server"',
              },
              {
                step: 3,
                title: "Masukkan IP & Join",
                javaText: 'Masukkan IP lalu "Done" → "Join Server"',
                bedrockText: 'Masukkan IP & Port 19132 lalu "Save"',
              },
            ].map((item, i) => (
              <Card key={i} className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-white/10 backdrop-blur-2xl p-8 text-center hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 group animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600/30 to-orange-600/30 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-amber-400 drop-shadow-lg">{item.step}</span>
                </div>
                <h3 className="text-white font-bold mb-4 text-xl">{item.title}</h3>
                <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                  <strong className="text-emerald-400">Java:</strong> {item.javaText}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <strong className="text-blue-400">Bedrock:</strong> {item.bedrockText}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom-5 duration-1000">
            <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 shadow-xl shadow-amber-600/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-600/50">
              <Play className="w-5 h-5 mr-2" />
              Mulai Main Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Ranks */}
      <section id="ranks" className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">Pilih Rank AYELVERSE Kamu</h2>
          <p className="text-slate-300 text-lg">Semua rank bersifat permanen dan langsung aktif setelah pembelian</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {rankPackages.map((rank, i) => (
            <Card
              key={rank.id}
              className={`bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-white/10 backdrop-blur-2xl p-8 hover:border-amber-600/50 transition-all duration-500 relative hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/30 group animate-in fade-in slide-in-from-bottom-4 ${
                rank.popular ? "ring-2 ring-amber-500/50 shadow-2xl shadow-amber-500/30" : "shadow-xl shadow-black/20"
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {rank.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-500/50 animate-bounce">
                  <Crown className="w-3 h-3 mr-1" />
                  Terpopuler
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600/30 to-orange-600/30 backdrop-blur-sm mb-4 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                  <Crown className="w-8 h-8 text-amber-400 drop-shadow-lg" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">{rank.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-slate-400 text-sm">Rp</span>
                  <span className="text-5xl font-bold bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                    {rank.price.toLocaleString("id-ID")}
                  </span>
                </div>
                <Badge variant="outline" className="mt-3 border-amber-600/40 text-amber-400 bg-amber-600/10 backdrop-blur-sm shadow-lg">
                  {rank.duration}
                </Badge>
              </div>

              <div className="space-y-3 mb-8 pb-6 border-b border-white/10">
                <div className="flex items-center justify-between text-slate-300 bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                  <span className="text-sm font-medium">Bonus Uang</span>
                  <span className="font-bold text-amber-400 drop-shadow-lg">{rank.money}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {rank.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300 transition-transform hover:translate-x-1">
                    <Check className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0 drop-shadow-lg" />
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handleBuyRank(rank.name, rank.price)}
                className={`w-full transition-all hover:scale-105 shadow-lg ${
                  rank.popular
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 shadow-amber-600/40 hover:shadow-xl hover:shadow-amber-600/50"
                    : "bg-slate-800/80 backdrop-blur-sm hover:bg-slate-700/80"
                }`}
              >
                <Crown className="w-4 h-4 mr-2" />
                Beli via WhatsApp
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <Card className="bg-gradient-to-r from-amber-900/30 via-orange-900/30 to-amber-900/30 border-amber-600/40 backdrop-blur-2xl p-16 text-center shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
          <div className="inline-block p-5 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm mb-6 shadow-xl shadow-amber-500/30">
            <Crown className="w-20 h-20 text-amber-400 drop-shadow-2xl" />
          </div>
          <h3 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">Siap Jadi VIP?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Bergabunglah dengan ribuan player lain yang sudah merasakan pengalaman bermain dengan rank VIP. Dapatkan akses eksklusif sekarang!
          </p>
          <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 shadow-xl shadow-amber-600/40 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-600/50" onClick={() => window.open('https://wa.me/6281378999763', '_blank')}>
            <Crown className="w-5 h-5 mr-2" />
            Hubungi Admin
          </Button>
        </Card>
      </section>

      {/* Checkout Modal */}
      {selectedRank && (
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          rankName={selectedRank.name}
          price={selectedRank.price}
        />
      )}

      {/* Question Modal */}
      <QuestionModal
        isOpen={isQuestionOpen}
        onClose={() => setIsQuestionOpen(false)}
      />

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <div className="inline-block p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm mb-6 shadow-xl shadow-amber-500/20">
              <MessageCircle className="w-16 h-16 text-amber-400 drop-shadow-lg" />
            </div>
            <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">Butuh Bantuan?</h2>
            <p className="text-slate-300 text-lg">Hubungi kami atau bergabung dengan komunitas AYELVERSE</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-white/10 backdrop-blur-2xl p-10 text-center hover:border-amber-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 group shadow-xl animate-in fade-in slide-in-from-bottom-4">
              <div className="inline-block p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl backdrop-blur-sm mb-6 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-14 h-14 text-amber-400 drop-shadow-lg" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Ajukan Pertanyaan</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Punya pertanyaan? Isi form dan kirim langsung ke admin
              </p>
              <Button
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 shadow-lg shadow-amber-600/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-600/50"
                onClick={() => setIsQuestionOpen(true)}
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Tanya Admin
              </Button>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900/40 to-slate-800/40 border-white/10 backdrop-blur-2xl p-10 text-center hover:border-green-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 group shadow-xl animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '100ms' }}>
              <div className="inline-block p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-sm mb-6 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                <Users className="w-14 h-14 text-green-400 drop-shadow-lg" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Grup WhatsApp</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Bergabung dengan komunitas player AYELVERSE
              </p>
              <Button
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 shadow-lg shadow-green-600/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-600/50"
                onClick={() => window.open('https://chat.whatsapp.com/Gq3NgII5cdZGFPnsAlu7Bc', '_blank')}
              >
                <Users className="w-4 h-4 mr-2" />
                Gabung Grup WA
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/30 backdrop-blur-xl mt-20 relative z-10 shadow-2xl shadow-black/30">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                <Crown className="w-5 h-5 text-white drop-shadow-lg" />
              </div>
              <span className="text-white font-bold text-lg">AYELVERSE</span>
            </div>
            <p className="text-slate-400">© 2024 AYELVERSE. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
