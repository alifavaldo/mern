import React from 'react'
import Button from 'elements/Button'
import IconText from 'parts/IconText'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tag-line">
              We kaboom your beauty holiday instanly and morable.
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">New Account</Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">Start Booking Room</Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payment">Use Payments</Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/carrers">Our Carrers</Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">Privcy</Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">Terms & Conditions</Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="/mailto:alifavaldo@gmail.com">
                  alifavaldo@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="/tel:+6221-2208-1996">021-2208-1996</Button>
              </li>
              <li className="list-group-item">
                <span>Staycation.Padang.Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2019 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  )
}
