import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/MyLayout';
import ReleaseList from "../containers/parentReleaseList";


const PostLink = props => (
    <li>
        <Link href={`/posts?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)


export default function Blog() {
    return (
        <>
            <Header />
            <ReleaseList />
        </>
    )
}