import React from "react";
import groq from "groq";
import client from "../../client";

const RecentPosts = props => {
	const { posts = [] } = props;
	return (
		<div className="container flex flex-wrap overflow-hidden mx-auto">
			<div className="w-full overflow-hidden py-8 mt-8 bg-white rounded-lg shadow-lg mx-4">
				<div className="mx-4">
					<div className="h2">Recent Posts on WordPress</div>
					<ul>
						{posts.map(
							({ _id, title = "", slug = "", _updatedAt = "" }) =>
								slug && (
									<li key={_id} className="my-4">
										<Link href="/[slug]" as={`/${slug.current}`}>
											<a className="text-2xl underline">{title}</a>
										</Link>{" "}
									</li>
								)
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

RecentPosts.getInitialProps = async () => ({
	posts: await client.fetch(groq`
      *[_type == "post"]|order(publishedAt desc)
    `)
});

export default RecentPosts;
