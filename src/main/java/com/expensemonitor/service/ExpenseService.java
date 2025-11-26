package com.expensemonitor.service;

import lombok.RequiredArgsConstructor;
import com.expensemonitor.model.Expense;
import com.expensemonitor.model.Group;
import com.expensemonitor.model.User;
import org.springframework.stereotype.Service;
import com.expensemonitor.repo.ExpenseRepo;
import com.expensemonitor.repo.GroupRepo;
import com.expensemonitor.repo.UserRepo;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExpenseService {
    public final ExpenseRepo expenseRepo;
    public final UserRepo userRepo;
    public final GroupRepo groupRepo;

    public Expense createExpense(Expense expense, Long userId) {
        User paidUser = userRepo.findById(userId).orElseThrow();
        //Group group = groupRepo.findById(groupId).orElseThrow();

        expense.setPaidUser(paidUser);
        //expense.setGroup(group);
        return expenseRepo.save(expense);
    }

    public List<Expense> getAllExpenses() {
        return expenseRepo.findAll();
    }

    public Expense getExpenseById(Long expenseId) {
        return expenseRepo.findById(expenseId).orElseThrow();
    }

    public List<Expense> getExpensesByGroupName(String groupName) {
        return expenseRepo.findByGroupName(groupName);
    }

    public List<Expense> getExpensesByUser(Long userId) {
        return expenseRepo.findByPaidUserId(userId);
    }

    public List<Expense> getExpensesByGroup(Long groupId) {
        return expenseRepo.findByGroupId(groupId);
    }

    //Open an API endpoint later
    public Expense updateExpense(Long id, Expense expense) {
        Expense expenseToUpdate = expenseRepo.findById(id).orElseThrow();
        expenseToUpdate.setAmount(expense.getAmount());
        expenseToUpdate.setDescription(expense.getDescription());
        expenseToUpdate.setExpenseDate(expense.getExpenseDate());

        return expenseRepo.save(expenseToUpdate);
    }

    public void deleteExpense(Long id) {
        Expense expenseToDelete = expenseRepo.findById(id).orElseThrow();
        expenseRepo.delete(expenseToDelete);
    }
}
