'use client'

import { useRouter } from "next/navigation"

const QueryRouter = () => {
    const router = useRouter()
    return router.query
}

export default QueryRouter