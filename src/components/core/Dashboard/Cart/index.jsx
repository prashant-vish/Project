import React from "react";
import { useSelector } from "react-redux";
import RenderCartCourses from "./RenderCartCourses";
import RenderTotalAmount from "./RenderTotalAmount";

export default function Cart() {
    const {total, totlaItems} = useSelector((state) => state.auth);
    return(
        <div className="text-white">
            <h1>
                Your Cart
            </h1>
            <p>
               {totlaItems} Courses in Cart
            </p>
            {
                total > 0
                ? (
                    <div>
                        <RenderCartCourses />
                        <RenderTotalAmount />
                        </div>
                ) : (
                    <p>
                        Your Cart is empty
                    </p>
                )
            }
        </div>
    )
}