import styled,{ css } from "styled-components";

const categories = [
		{
				name: 'all',
				text: '전체보기'
		},
		{
				name: 'business',
				text: '비지니스'
		},
		{
				name: 'entertainment',
				text: '엔터테인먼트'
		},
		{
				name: 'health',
				text: '건강'
		},
		{
				name: 'sport',
				text: '스포츠'
		},
		{
				name: 'technology',
				text: '기술'
		},
];

const CategoriesBlock = styled.div`
		display: flex;
		padding: 1rem;
		width: 768px;
		margin: 0 auto;
		@media screen and (max-width: 768px) {
				width: 100px;
				overflow-x: auto;
		}
`;

const Category = styled.div`
	font-size: 1.125rem;
	cursor: pointer;
	white-space: pre;
	text-decoration: none;
	color: inherit;
	padding-bottom: .25rem;
	&:hover {
			color: #495057;
	}
	${(props) => props.active && css`
		font-weight: bold;
		border-bottom: 2px solid #22bbcf;
		color: #22b8cf;
		&:hover {
				color: red;
		}
		& + & {
				margin-left: 1rem;
		}
	`};
`;

const Categories = ({onSelect, category}) => {
	return (
		<CategoriesBlock>
			{categories.map(c=>(
				<Category key={c.name} active={category === c.name} onClick={()=>onSelect(c.name)}>
					{c.text}
				</Category>
			))}
		</CategoriesBlock>
	);
}
export default Categories;