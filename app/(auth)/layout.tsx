import React from "react"

export default function SigninLayout({children,}: {
    children : React.ReactNode
}) {
    return <div>
        <div className="border-1 p-1">
            20% Off Freeeeeeeeeeeeeeeee!!!!!!
        </div>
        {children}
    </div>
}