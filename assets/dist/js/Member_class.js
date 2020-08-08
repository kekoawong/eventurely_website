class Member {
    constructor(team, name, position, background_info, bio, imagePath, linkedin) {
        this.team = team;
        this.name = name;
        this.position = position;
        this.background_info = background_info;
        this.bio = bio;
        this.image = imagePath;
        this.linkedin = linkedin;
    }
    create_element() {
        let member = `
        <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
            <title>Placeholder</title><image class="headshot" width="100%" href="${this.image}"></image></svg>
        <h2>${this.name}</h2>
        <h5>${this.position}</h5>
        <h6>${this.background_info}</h6>
        <p>${this.bio}</p>
        <p><a class="btn btn-secondary navy-background" target="_blank" href="${this.linkedin}" role="button">Learn More &raquo;</a></p>
        </div>`;
    
        return member;
    }
}

export default Member;