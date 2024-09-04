import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import Image from "next/image"

const SingInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")

  return (
    <DialogContent className="w-[90%]">
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google
        </DialogDescription>
      </DialogHeader>

      <Button
        variant="outline"
        className="gap-1 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          alt="Fazer login com o Google"
          src="/google.svg"
          width={18}
          height={18}
        />
        Google
      </Button>
    </DialogContent>
  )
}

export default SingInDialog
