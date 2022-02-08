import { testLogo } from './layout.module.css';

export default function Logo() {
  return (
    <div>
      <img className={testLogo} src='/TestLogo.png' alt="Test logo" width="150" height="30" />
    </div>
  )
}