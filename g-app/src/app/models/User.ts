export class User {
    public UserId: number;
	public FirstName: String;
	public Surname: String;
	public Email: String;
	public Password: String;
	public ConfirmPassword: String;
	public Role: String;
	public Status: String;
	public BankName: String;
	public AccountNo: String;
	public BankBranchCode: String;
	public AccountType: String;
	public CVV: String;

	public UpdateUser(src: User){
		this.UserId = src.UserId;
		this.FirstName = src.FirstName;
		this.Surname = src.Surname;
		this.Email = src.Email;
		this.Password = src.Password;
		this.Role = src.Role;
		this.Status = src.Status;
		this.BankName = src.BankName;
		this.AccountNo = src.AccountNo;
		this.BankBranchCode = src.BankBranchCode;
		this.AccountType = src.AccountType;
		this.CVV = src.CVV;
	}
}
