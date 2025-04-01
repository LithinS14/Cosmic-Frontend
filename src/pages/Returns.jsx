"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import "../styles/pages/terms-policy.css"

const Returns = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="terms-policy-page"
    >
      <section className="terms-policy-hero">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Returns & Exchanges
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our policy for returns, refunds, and exchanges
          </motion.p>
        </div>
      </section>

      <section className="terms-policy-content">
        <div className="container">
          <div className="terms-policy-container">
            <div className="last-updated">
              <p>Last Updated: April 1, 2025</p>
            </div>

            <div className="terms-policy-section">
              <h2>1. Return Policy</h2>
              <p>
                At COSMIC, we want you to be completely satisfied with your purchase. If for any reason you are not
                satisfied, we offer returns and exchanges within 30 days of the delivery date.
              </p>
              <p>To be eligible for a return or exchange, your item must be:</p>
              <ul>
                <li>Unworn, unwashed, and in the same condition that you received it</li>
                <li>In the original packaging with all tags attached</li>
                <li>Accompanied by the original receipt or proof of purchase</li>
              </ul>
            </div>

            <div className="terms-policy-section">
              <h2>2. Return Process</h2>
              <p>To initiate a return or exchange, please follow these steps:</p>
              <ol>
                <li>
                  Log in to your account and navigate to the "Order History" section, or contact our customer service
                  team if you checked out as a guest.
                </li>
                <li>Select the order containing the item(s) you wish to return or exchange.</li>
                <li>
                  Fill out the return form, indicating whether you want a refund or an exchange, and the reason for your
                  return.
                </li>
                <li>
                  Print the prepaid return shipping label (if applicable) or use your preferred shipping method to
                  return the item(s).
                </li>
                <li>
                  Package the item(s) securely in the original packaging if possible, and include the return form.
                </li>
                <li>Drop off the package at the designated shipping carrier.</li>
              </ol>
            </div>

            <div className="terms-policy-section">
              <h2>3. Refunds</h2>
              <p>
                Once we receive and inspect your return, we will send you an email to notify you that we have received
                your returned item. We will also notify you of the approval or rejection of your refund.
              </p>
              <p>
                If approved, your refund will be processed, and a credit will automatically be applied to your original
                method of payment within 5-10 business days. Please note that it may take an additional 2-5 business
                days for the refund to appear in your account, depending on your financial institution.
              </p>
              <h3>Refund Methods</h3>
              <ul>
                <li>Credit/Debit Card: Refunded to the original card used for purchase</li>
                <li>PayPal: Refunded to the original PayPal account</li>
                <li>Store Credit: Issued as a gift card or store credit to your account</li>
              </ul>
            </div>

            <div className="terms-policy-section">
              <h2>4. Exchanges</h2>
              <p>
                If you need to exchange an item for a different size, color, or product, please indicate this on your
                return form. Exchanges are subject to product availability.
              </p>
              <p>
                For the fastest processing time, we recommend placing a new order for the desired item and returning the
                original item for a refund. This ensures that you receive the new item as quickly as possible and
                guarantees that the item you want is in stock.
              </p>
            </div>

            <div className="terms-policy-section">
              <h2>5. Return Shipping</h2>
              <p>
                You are responsible for the cost of return shipping unless the item received was defective, damaged, or
                incorrect. In these cases, COSMIC will provide a prepaid return shipping label.
              </p>
              <p>
                We recommend using a trackable shipping service and purchasing shipping insurance for items of value, as
                we cannot be responsible for items lost or damaged in transit.
              </p>
            </div>

            <div className="terms-policy-section">
              <h2>6. Non-Returnable Items</h2>
              <p>The following items cannot be returned or exchanged:</p>
              <ul>
                <li>Gift cards</li>
                <li>Personalized or custom-made items</li>
                <li>Intimate apparel for hygiene reasons</li>
                <li>Opened perfumes or cosmetics</li>
                <li>Items marked as "Final Sale" or "Non-Returnable"</li>
              </ul>
            </div>

            <div className="terms-policy-section">
              <h2>7. Damaged or Defective Items</h2>
              <p>
                If you receive a damaged or defective item, please contact our customer service team within 7 days of
                receiving your order. Please provide photos of the damage or defect along with your order number.
              </p>
              <p>
                We will work with you to resolve the issue promptly, either by providing a replacement or issuing a full
                refund, including any shipping costs.
              </p>
            </div>

            <div className="terms-policy-section">
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions or concerns about our return and exchange policy, please contact our customer
                service team at:
              </p>
              <p>
                Email: returns@cosmic.com
                <br />
                Phone: (555) 123-4567
                <br />
                Hours: Monday-Friday, 9 AM - 5 PM EST
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}

export default Returns

