import { useState } from "react";
import EventCard from "../../components/EventCard";
import Select from "../../components/Select";
import { useData } from "../../contexts/DataContext";
import Modal from "../Modal";
import ModalEvent from "../ModalEvent";

import "./style.css";

const PER_PAGE = 9;

const EventList = () => {
	const { data, error } = useData();
	const [type, setType] = useState();
	const [currentPage, setCurrentPage] = useState(1);

	const allEvents = data?.events || [];

	// Filtre les événements par type
	const filteredByType = type ? allEvents.filter((event) => event.type === type) : allEvents;

	// Calcule le nombre total de pages basé sur les événements filtrés par type
	const pageNumber = Math.ceil(filteredByType.length / PER_PAGE);

	// Calcule l'index de début pour la pagination
	const startIndex = (currentPage - 1) * PER_PAGE;
	const endIndex = startIndex + PER_PAGE;

	// Sélectionne les événements pour la page actuelle
	const paginatedEvents = filteredByType.slice(startIndex, endIndex);

	const changeType = (evtType) => {
		setCurrentPage(1);
		setType(evtType);
	};

	const typeList = [...new Set(allEvents.map((event) => event.type))];

	return (
		<>
			{error && <div>Une erreur est survenue</div>}
			{data === null ? (
				"Chargement..."
			) : (
				<>
					<h3 className="SelectTitle">Catégories</h3>
					<Select
						selection={Array.from(typeList)}
						onChange={(value) => (value ? changeType(value) : changeType(null))}
						name="select"
						titleEmpty={false}
						label=""
						type="normal"
					/>
					<div id="events" className="ListContainer">
						{paginatedEvents.map((event, index) => (
							// eslint-disable-next-line react/no-array-index-key
							<Modal key={`${event.id}-${index}`} Content={<ModalEvent event={event}/>} opened={false}>
								{({ setIsOpened }) => (
									<EventCard
										key={event.id}
										onClick={() => setIsOpened(true)}
										imageSrc={event.cover}
										title={event.title}
										date={new Date(event.date)}
										label={event.type}
										small={false}
										imageAlt="image"
									/>
								)}
							</Modal>
						))}
					</div>
					{pageNumber > 1 && (
						<div className="Pagination">
							{[...Array(pageNumber)].map((_, n) => (
								<a
									// eslint-disable-next-line react/no-array-index-key
									key={n}
									href="#events"
									className={currentPage === n + 1 ? "active" : ""}
									onClick={() => setCurrentPage(n + 1)}
								>
									{n + 1}
								</a>
							))}
						</div>
					)}
				</>
			)}
		</>
	);
};

export default EventList;
