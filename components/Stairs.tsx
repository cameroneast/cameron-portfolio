import { motion } from "framer-motion"
import { exit } from "process"

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
}

const Stairs = () => {
  return (
    <div>Stair</div>
  )
}

export default Stairs